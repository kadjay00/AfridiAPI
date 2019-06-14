import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SELECTION', {schema: 'dbo' } )
@Index('IX_SELECTION_PKINDEX', ['SEL_SELECTIONID_N'], {unique: true})
export class T_SELECTION {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SEL_SELECTIONID_N',
        })
    public SEL_SELECTIONID_N: number;

    @Column('char', {
        nullable: true,
        name: 'SEL_LOCALINPUT_C',
        })
    public SEL_LOCALINPUT_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SEL_DESCRIPNED_C',
        })
    public SEL_DESCRIPNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SEL_DESCRIPFRA_C',
        })
    public SEL_DESCRIPFRA_C: string;

    @Column('int', {
        nullable: true,
        name: 'SEL_VALUE1_N',
        })
    public SEL_VALUE1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SEL_VALUE2_N',
        })
    public SEL_VALUE2_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SEL_FLAG1_C',
        })
    public SEL_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SEL_FLAG2_C',
        })
    public SEL_FLAG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SEL_USERID_C',
        })
    public SEL_USERID_C: string | null;

}
