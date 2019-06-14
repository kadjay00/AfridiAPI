import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTIONMVTHISTO', {schema: 'dbo' } )
export class T_ACTIONMVTHISTO {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'ACH_LINE_N',
        })
    public ACH_LINE_N: number;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'ACH_ITEMLINE_N',
        })
    public ACH_ITEMLINE_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'ACH_ACTIONID_N',
        })
    public ACH_ACTIONID_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ACH_IDNUMBER_C',
        })
    public ACH_IDNUMBER_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'ACH_EANCODE_N',
        })
    public ACH_EANCODE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ACH_STATE_C',
        })
    public ACH_STATE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ACH_MODIFIED_DAT',
        })
    public ACH_MODIFIED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ACH_USER_C',
        })
    public ACH_USER_C: string | null;

}
