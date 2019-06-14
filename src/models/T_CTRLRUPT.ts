import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CTRLRUPT', {schema: 'dbo' } )
export class T_CTRLRUPT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'RUP_RUPTURE_N',
        })
    public RUP_RUPTURE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'RUP_STATUS_C',
        })
    public RUP_STATUS_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'RUP_COMMENT_C',
        })
    public RUP_COMMENT_C: string | null;

    @Column('datetime', {
        nullable: false,
        name: 'RUP_CREATION_DAT',
        })
    public RUP_CREATION_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'RUP_MODIFICATION_DAT',
        })
    public RUP_MODIFICATION_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'RUP_USERCREATE_C',
        })
    public RUP_USERCREATE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'RUP_USERMODIF_C',
        })
    public RUP_USERMODIF_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'RUP_VALIDATION_DAT',
        })
    public RUP_VALIDATION_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RUP_TOT_REF_MAG_N',
        })
    public RUP_TOT_REF_MAG_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RUP_TOT_REF_PDC_N',
        })
    public RUP_TOT_REF_PDC_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RUP_TOT_REF_FAM_PDC_N',
        })
    public RUP_TOT_REF_FAM_PDC_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'RUP_TYPE_C',
        })
    public RUP_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RUP_MANAGER_N',
        })
    public RUP_MANAGER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'RUP_SUPONLINE_C',
        })
    public RUP_SUPONLINE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'RUP_GROUP_C',
        })
    public RUP_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RUP_ACTIVITY_N',
        })
    public RUP_ACTIVITY_N: number | null;

}
