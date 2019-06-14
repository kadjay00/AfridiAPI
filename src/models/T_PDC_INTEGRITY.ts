import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_INTEGRITY', {schema: 'dbo' } )
export class T_PDC_INTEGRITY {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'PIN_ID_N',
        })
    public PIN_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'PIN_CONTROLE_DAT',
        })
    public PIN_CONTROLE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PIN_TYPE_C',
        })
    public PIN_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PIN_GROUP_C',
        })
    public PIN_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PIN_ACTIVITY_N',
        })
    public PIN_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PIN_SUBDEPARTMENT_N',
        })
    public PIN_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PIN_SALESGROUP_C',
        })
    public PIN_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PIN_SALESFAMILY_C',
        })
    public PIN_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PIN_SALESSUBFAMILY_C',
        })
    public PIN_SALESSUBFAMILY_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PIN_PDCACTIVE_DAT',
        })
    public PIN_PDCACTIVE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PIN_PDCINACTIVE_DAT',
        })
    public PIN_PDCINACTIVE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PIN_IDNUMBER_C',
        })
    public PIN_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PIN_IDGESTION_C',
        })
    public PIN_IDGESTION_C: string | null;

}
