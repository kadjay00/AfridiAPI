import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRFACING', {schema: 'dbo' } )
export class T_REPRFACING {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'REF_REPRFACING_N',
        })
    public REF_REPRFACING_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'REF_STATE_C',
        })
    public REF_STATE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REF_CREATION_DAT',
        })
    public REF_CREATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'REF_MODIFICATION_DAT',
        })
    public REF_MODIFICATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'REF_USERCREATE_C',
        })
    public REF_USERCREATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'REF_USERMODIF_C',
        })
    public REF_USERMODIF_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REF_VALIDATION_DAT',
        })
    public REF_VALIDATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'REF_CANCELATION_DAT',
        })
    public REF_CANCELATION_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'REF_TYPE_C',
        })
    public REF_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'REF_MANAGER_N',
        })
    public REF_MANAGER_N: number | null;

}
